# Sage Share 🌿

A next-generation fan wiki and community platform with advanced features for creators and fans.

## Features (Planned & In Development)

### Phase 1: MVP Foundation
- ✅ User authentication (Supabase Auth)
- ✅ User profiles
- [ ] Wiki creation and management
- [ ] Basic CRUD operations
- [ ] Simple permission system (own/edit/view)
- [ ] Comments and discussions
- [ ] Basic flagging/reporting system

### Phase 2: Smart Features
- [ ] Anti-spoiler shields with dynamic filters
- [ ] Predictive moderation (AI pattern detection)
- [ ] Collaboration hubs (real-time co-creation)
- [ ] Cross-language translation layers
- [ ] Advanced permission management

### Phase 3: Creator Economy & Preservation
- [ ] Fan monetization pipelines
- [ ] Archival preservation tools
- [ ] 3D asset libraries
- [ ] Content licensing system
- [ ] IP owner consent framework

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Hosting**: GitHub Pages
- **Backend**: Supabase (PostgreSQL, Auth, Real-time)
- **Database**: PostgreSQL (via Supabase)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account (free tier available)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ash3rly/sage-share.git
cd sage-share
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Add your Supabase credentials to `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Schema

### Users
- `id` (UUID, primary key)
- `email` (text, unique)
- `username` (text, unique)
- `avatar_url` (text, nullable)
- `bio` (text, nullable)
- `created_at` (timestamp)
- `updated_at` (timestamp)

### Wikis
- `id` (UUID, primary key)
- `creator_id` (UUID, foreign key to users)
- `title` (text)
- `description` (text, nullable)
- `slug` (text, unique)
- `content` (text)
- `is_public` (boolean)
- `created_at` (timestamp)
- `updated_at` (timestamp)

### Wiki Permissions
- `id` (UUID, primary key)
- `wiki_id` (UUID, foreign key to wikis)
- `user_id` (UUID, foreign key to users)
- `permission_level` (enum: 'view', 'edit', 'admin')
- `created_at` (timestamp)

### Comments
- `id` (UUID, primary key)
- `wiki_id` (UUID, foreign key to wikis)
- `user_id` (UUID, foreign key to users)
- `content` (text)
- `created_at` (timestamp)
- `updated_at` (timestamp)

### Flags (Moderation)
- `id` (UUID, primary key)
- `wiki_id` (UUID, foreign key to wikis, nullable)
- `comment_id` (UUID, foreign key to comments, nullable)
- `user_id` (UUID, foreign key to users)
- `reason` (text)
- `status` (enum: 'pending', 'reviewed', 'resolved')
- `created_at` (timestamp)

## Project Structure

```
sage-share/
├── app/                    # Next.js 15 app directory
│   ├── api/               # API routes (future)
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # User dashboard (future)
│   ├── wiki/              # Wiki pages (future)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable React components (future)
├── lib/
│   ├── supabase.ts        # Supabase client & types
│   └── utils.ts           # Helper functions (future)
├── public/                # Static assets
├── .env.local.example     # Environment template
├── .gitignore
├── next.config.js         # Next.js configuration
├── package.json
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Development Roadmap

### Sprint 1 (Week 1-2): User Foundation
- [ ] Supabase project setup
- [ ] Auth pages (login, signup, profile)
- [ ] User profile management
- [ ] Database migrations

### Sprint 2 (Week 3-4): Wiki Core
- [ ] Wiki creation form
- [ ] Wiki editing interface
- [ ] Wiki listing/search
- [ ] Basic version control

### Sprint 3 (Week 5-6): Community
- [ ] Comments system
- [ ] Discussion threads
- [ ] Basic flagging system
- [ ] Admin dashboard (basic)

## Contributing

This is a solo project by [@Ash3rly](https://github.com/Ash3rly). Contributions will be considered as the project grows.

## License

MIT License - feel free to fork and build upon this!

## Support

For questions or ideas, open an issue on GitHub.

---

**Note**: Sage Share is in early development. Features are being added progressively.
