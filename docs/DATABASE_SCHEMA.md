# Database Schema

## Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  role ENUM('admin', 'supervisor', 'staff') NOT NULL DEFAULT 'staff',
  department VARCHAR(100),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_department ON users(department);
CREATE INDEX idx_users_role ON users(role);
```

## Status Table
```sql
CREATE TABLE statuses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status ENUM(
    'available',
    'on_break',
    'assigned_task',
    'sick_leave',
    'training',
    'other'
  ) NOT NULL DEFAULT 'available',
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE INDEX idx_statuses_user_id ON statuses(user_id);
CREATE INDEX idx_statuses_created_at ON statuses(created_at);
```

## Status History Table
```sql
CREATE TABLE status_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status ENUM(
    'available',
    'on_break',
    'assigned_task',
    'sick_leave',
    'training',
    'other'
  ) NOT NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_status_history_user_id ON status_history(user_id);
CREATE INDEX idx_status_history_created_at ON status_history(created_at);
```

## Relationships

- **Users to Statuses**: One-to-Many (A user can have multiple status records)
- **Users to Status History**: One-to-Many (A user can have multiple historical status entries)

## Key Constraints

- `user_id` in statuses and status_history tables must reference an existing user
- Email must be unique across all users
- Role must be one of: admin, supervisor, staff
- Status must be one of: available, on_break, assigned_task, sick_leave, training, other
