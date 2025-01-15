```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
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
  // This will cause an error if the user navigates directly to /about 
  // without going through the home page first
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    return <div>Please go to the home page first.</div>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome, {user.name}!</p>
    </div>
  );
}
```