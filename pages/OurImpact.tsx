
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';

const data = [
  { name: 'Female Health', value: 45 },
  { name: 'Climate', value: 30 },
  { name: 'Mental Health', value: 25 },
];

const COLORS = ['#2563eb', '#10b981', '#fbbf24'];

const OurImpact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Data-Driven Transformation</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transparency is core to our values. Here is how we allocate our resources and the quantifiable change we've achieved over the last decade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-50 p-8 rounded-3xl shadow-inner">
            <h3 className="text-2xl font-bold mb-8 text-blue-800 text-center">Resource Allocation</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              {data.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[idx] }} />
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl shadow-inner">
            <h3 className="text-2xl font-bold mb-8 text-blue-800 text-center">Monthly Engagement Growth</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[
                  { month: 'Jan', reach: 4000 },
                  { month: 'Feb', reach: 5200 },
                  { month: 'Mar', reach: 6100 },
                  { month: 'Apr', reach: 7500 },
                  { month: 'May', reach: 9000 },
                ]}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Bar dataKey="reach" fill="#2563eb" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 opacity-50" />
                <h4 className="text-xl font-bold text-blue-900 mb-4">Clinic Success Story</h4>
                <p className="text-gray-600 italic">"Before EcoHealth arrived, we had to travel 4 hours for a basic check-up. Now, we have a community center that cares for our bodies and our minds."</p>
                <p className="mt-4 font-bold text-blue-600">— Amina, Community Leader</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full -mr-16 -mt-16 opacity-50" />
                <h4 className="text-xl font-bold text-emerald-900 mb-4">Environment Win</h4>
                <p className="text-gray-600 italic">"The mangrove project didn't just save our beach; it created jobs. The community is now proud to be guardians of our local ecosystem."</p>
                <p className="mt-4 font-bold text-emerald-600">— David, Eco-Volunteer</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
