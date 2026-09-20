import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: '#0a0a0a',
      color: '#fff',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <h1 style={{ fontSize: '6rem', fontWeight: 800, margin: 0, color: '#25D366' }}>404</h1>
      <p style={{ fontSize: '1.25rem', color: '#999', marginTop: '0.5rem' }}>
        This page doesn't exist.
      </p>
      <Link to="/" style={{
        marginTop: '2rem',
        padding: '0.75rem 2rem',
        background: '#25D366',
        color: '#fff',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 600,
        fontSize: '1rem',
      }}>
        Go home
      </Link>
    </div>
  );
}
