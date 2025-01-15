```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  // Store user data in localStorage
  localStorage.setItem('user', JSON.stringify({ name: 'John Doe' }));
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // Check if user data exists in localStorage
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  if (!user) {
    return <div>Please go to the home page first.</div>;
  } else {
    return (
      <div>
        <h1>About Page</h1>
        <p>Welcome, {user.name}!</p>
      </div>
    );
  }
}
```