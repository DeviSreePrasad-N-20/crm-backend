README.md:
text
# CRM Backend ( Node.js)

This is a Node.js Express backend for managing CRM leads and counselor authentication.

## Features

- Counselor registration and login (JWT based)
- Public lead (enquiry) submission
- Unclaimed/claimed leads management
- Protected routes with authentication middleware

## Endpoints

| Method | Endpoint                     | Description                             | Auth Required |
|--------|------------------------------|-----------------------------------------|--------------|
| POST   | /api/employees/register      | Register a new counselor                | No           |
| POST   | /api/employees/login         | Login as counselor, receive JWT         | No           |
| POST   | /api/enquiries/public        | Submit public enquiry                   | No           |
| GET    | /api/enquiries/public        | View all unclaimed enquiries            | Yes          |
| GET    | /api/enquiries/private       | View claimed enquiries (by counselor)   | Yes          |
| PATCH  | /api/enquiries/:id/claim     | Claim an unclaimed enquiry              | Yes          |

## Setup

1. Clone this repo:
git clone https://github.com/DeviSreePrasad-N-20/crm-backend.git
cd crm-backend

text
2. Install dependencies:
npm install

text
3. Create a `.env` file (see `.env.example`):
PORT=3000
JWT_SECRET=your_secret_key
DB_FILE=yourdb.sqlite

text
4. Start the server:
npm start

text
5. Use Postman or Insomnia to test API endpoints.

## Tech Stack

- Node.js
- Express
- Sequelize (SQLite)
- JWT (jsonwebtoken)
- bcrypt

## License

[MIT](LICENSE)
Now:

Save the README.md.

Add to git and commit:

bash
git add README.md
git commit -m "Add README"
git push
