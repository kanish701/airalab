import { useState } from 'react';

const SimpleLogin = ({ onLogin }: { onLogin: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation (for demo only)
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    // Simulate login success
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#181818]">
      <form onSubmit={handleSubmit} className="bg-[#232323] p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Login</h2>
        {error && <div className="text-red-400 mb-4 text-center text-sm">{error}</div>}
        <div className="mb-4">
          <label className="block text-white mb-1">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 rounded bg-black/30 border border-gray-700 text-white focus:outline-none"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white mb-1">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 rounded bg-black/30 border border-gray-700 text-white focus:outline-none"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition">Login</button>
      </form>
    </div>
  );
};

export default SimpleLogin;
