import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';

export default function QuoteForm() {
  const [rooms, setRooms] = useState([{ type: '', size: '' }]);

  const addRoom = () => {
    setRooms([...rooms, { type: '', size: '' }]);
  };

  const removeRoom = (index) => {
    if (index === 0) return;
    const newRooms = rooms.filter((_, i) => i !== index);
    setRooms(newRooms);
  };

  const handleRoomChange = (index, field, value) => {
    const newRooms = [...rooms];
    newRooms[index][field] = value;
    setRooms(newRooms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote request submitted');
  };

  return (
    <div className="min-h-screen bg-teal-800 flex flex-col items-center text-xs">
      {/* Top Navigation */}
      <nav className="w-full bg-white shadow-sm text-sm">
        <div className="max-w-8xl mx-auto px-6 py-2 flex items-center justify-between">
          <img src="/logo.png" alt="CM Housekeepers Logo" className="h-8" />
          <Link
            to="/"
            className="inline-block bg-teal-800 text-white px-3 py-2 text-xs rounded hover:bg-teal-700 transition text-xs font-medium"
          >
            Home
          </Link>
        </div>
      </nav>

      {/* Main Form Content */}
      <main className="flex-grow flex items-center justify-center w-full p-6">
        <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl h-fit">
          <h1 className="text-sm font-bold text-teal-800 mb-2">Request a Quote</h1>
          <p className="text-slate-600 mb-6">
            Fill out the form below to request your personalised cleaning quote.
            We'll get back to you within 24 hours to confirm availability and pricing.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-medium">Name</label>
              <input type="text" className="mt-1 w-full border rounded p-2" required />
            </div>

            <div className="mb-4">
              <label className="block font-medium">Email</label>
              <input type="email" className="mt-1 w-full border rounded p-2" required />
            </div>

            <div className="mb-4">
              <label className="block font-medium">Rooms</label>
              {rooms.map((room, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-1 mt-1 items-stretch"
                >
                  <input
                    type="text"
                    placeholder="Room name"
                    value={room.type}
                    onChange={(e) => handleRoomChange(index, 'type', e.target.value)}
                    className="flex-1 border rounded p-2"
                    required
                  />
                  <select
                    value={room.size}
                    onChange={(e) => handleRoomChange(index, 'size', e.target.value)}
                    className="flex border rounded p-2"
                    required
                  >
                    <option value="">Size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                  </select>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeRoom(index)}
                      className="px-2 flex items-center justify-center bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 cursor-pointer"
                      aria-label="Remove room"
                    >
                      <Trash2 className="w-4 h-4 text-black" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addRoom}
                className="mt-1 text-teal-600 hover:underline cursor-pointer"
              >
                + Add Room
              </button>
            </div>

            <div className="mb-4">
              <label className="block font-medium">Services</label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {['Standard cleaning', 'Deep cleaning', 'Disinfection', 'Window cleaning'].map((service) => (
                  <label key={service} className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value={service}
                      name="services"
                      required
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-4 mt-1">
              <label className="block font-medium">Preferred Date</label>
              <input type="date" className="mt-1 w-full border rounded p-2" required />
            </div>

            <button
              type="submit"
              className="bg-teal-800 text-white w-full py-2 rounded hover:bg-teal-900"
            >
              Submit Request
            </button>
          </form>

          <section className="mt-5 text-slate-700">
            <h2 className="text-sm font-semibold text-teal-800 mb-4">What to Expect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We'll review your request and contact you via email within 24 hours.</li>
              <li>You can ask follow-up questions or request changes to your quote.</li>
              <li>No obligation – you're free to decline if it's not right for you.</li>
            </ul>
          </section>

          <div className="mt-5 text-center text-slate-500">
            Trusted by households across Essex • Fully insured • 100% satisfaction guarantee
          </div>
        </div>
      </main>
    </div>
  );
}
