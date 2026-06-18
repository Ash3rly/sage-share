import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for database schema
export interface User {
  id: string;
  email: string;
  username: string;
  avatar_url?: string;
  bio?: string;
  created_at: string;
  updated_at: string;
}

export interface Wiki {
  id: string;
  creator_id: string;
  title: string;
  description?: string;
  slug: string;
  content: string;
  is_public: boolean;
  created_at: string;
  updated_at: string;
}

export interface WikiPermission {
  id: string;
  wiki_id: string;
  user_id: string;
  permission_level: 'view' | 'edit' | 'admin';
  created_at: string;
}

export interface Comment {
  id: string;
  wiki_id: string;
  user_id: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface Flag {
  id: string;
  wiki_id?: string;
  comment_id?: string;
  user_id: string;
  reason: string;
  status: 'pending' | 'reviewed' | 'resolved';
  created_at: string;
}
