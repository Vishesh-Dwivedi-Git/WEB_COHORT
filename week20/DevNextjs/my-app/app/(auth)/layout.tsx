export default function layout({children}: {children: React.ReactNode}) {
    return (
    <div>
        <h1>Auth Layout</h1>
        <p>This is the auth layout</p>
        <div className="auth-layout">
            {children}
        </div>
        <h1> This is the footer Mannnn!!!!!!</h1>
    </div>
    );
}