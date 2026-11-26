THE EDIT — SUPABASE WEBSITE PACKAGE

FILES
index.html — public lifestyle and entertainment homepage
article.html — article detail page
admin.html — authenticated admin dashboard with create/edit/delete and file upload
styles.css — responsive design
app.js — public story loading, search, filters, theme and newsletter signup
supabase-config.js — Supabase project settings
supabase-schema.sql — database, RLS and Storage setup

CONNECT SUPABASE
1. Create a project at https://supabase.com/
2. In Project Settings > API, copy Project URL and anon/public key.
3. Put them in supabase-config.js, replacing the two placeholder values.
4. Never put the service_role/secret key in frontend JavaScript.
5. In Supabase SQL Editor, run all of supabase-schema.sql.

CREATE YOUR ADMIN ACCOUNT
1. Supabase Dashboard > Authentication > Users > Add user.
2. Create your admin email and password.
3. Copy the new user's UUID.
4. Run this in SQL Editor, replacing the UUID:
   update public.profiles set role='admin', display_name='Site Administrator'
   where id='YOUR-AUTH-USER-UUID';
5. Open admin.html and sign in with that email/password.

RUN LOCALLY
Serve this folder using a local web server (not file://). For example:
python -m http.server 8000
Then visit http://localhost:8000

IMAGE UPLOAD / DATA
Admin chooses a JPG, PNG or WebP file (max 5 MB). The image binary is uploaded to Supabase Storage bucket article-images. The article's cover_image URL and cover_image_path, title, slug, summary, body, category, author, status and publish timestamp are saved in the articles table. Subscribers are saved in subscribers. Categories and user roles are stored in their own tables.
The image itself should live in Storage rather than a PostgreSQL bytea field; the database stores its URL/path. This is the standard, more scalable approach.

SECURITY
RLS is enabled. Public users can read only published articles and insert a consented newsletter signup. Admin/editor operations require a Supabase Auth session and matching role. New users default to reader. Promote trusted accounts only. The browser uses the anon/public key; never use service_role.
Before production, add CAPTCHA/rate limits for public subscriptions, unsubscribe handling, a privacy notice, backups, SEO metadata, sitemap, analytics and input sanitization if adding rich text.

MONETIZATION
This code stores newsletter signups but does not yet send campaigns. Connect Brevo/Mailchimp via a secure server-side function. Apply separately for AdSense and follow its policies; approval/revenue are not guaranteed. Clearly label sponsored content and disclose affiliate links. Add Node.js/Supabase Edge Functions later for advanced email, scheduling, analytics or integrations.

DEPLOYMENT
Deploy static files to Netlify, Vercel or Cloudflare Pages. Supabase provides database, auth and storage. Use HTTPS and a custom domain.

NOTE
The package is Supabase-ready, not already connected to your account. You must supply your own project URL/key and run the SQL/admin setup. No credentials are included.
