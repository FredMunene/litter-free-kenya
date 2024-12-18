'use server'

import { getDb } from '../lib/db'

export async function registerForEvent(formData: FormData) {
  const db = await getDb();

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const eventId = formData.get('event') as string;
  const message = formData.get('message') as string;

  try {
    // Insert or update user
    const user = await db.get('SELECT id FROM users WHERE email = ?', email);
    let userId;
    if (user) {
      await db.run('UPDATE users SET name = ?, phone = ? WHERE id = ?', name, phone, user.id);
      userId = user.id;
    } else {
      const result = await db.run('INSERT INTO users (name, email, phone) VALUES (?, ?, ?)', name, email, phone);
      userId = result.lastID;
    }

    // Insert registration
    await db.run('INSERT INTO registrations (user_id, event_id, message) VALUES (?, ?, ?)', userId, eventId, message);

    return { success: true, message: 'Registration successful!' };
  } catch (error) {
    console.error('Registration error:', error);
    return { success: false, message: 'Registration failed. Please try again.' };
  }
}

export async function getEvents() {
  const db = await getDb();
  return await db.all('SELECT * FROM events');
}

