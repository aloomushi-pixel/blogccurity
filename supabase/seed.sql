-- Supabase Seed File
-- Configuración inicial requerida para cumplir con las Reglas Globales (Admin por defecto)

-- Insertar el usuario administrador por defecto
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  recovery_sent_at,
  last_sign_in_at,
  app_metadata,
  user_metadata,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'juangarcia@ccurity.com.mx',
  crypt('E4ae5d6c0c.', gen_salt('bf')),
  current_timestamp,
  current_timestamp,
  current_timestamp,
  '{"provider":"email","providers":["email"]}',
  '{"role":"admin"}',
  current_timestamp,
  current_timestamp,
  '',
  '',
  '',
  ''
);
