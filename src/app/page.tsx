export default function Home() {
  const members = [
    {
      name: "Michael",
      stouts: 2,
      gees: 5,
      outstanding: 7,
    },
    {
      name: "Ross",
      stouts: 4,
      gees: 3,
      outstanding: 7,
    },
    {
      name: "Gareth",
      stouts: 1,
      gees: 2,
      outstanding: 3,
    },
  ];

  const winner = {
    name: "Michael",
    points: 87,
  };

  const loser = {
    name: "Ross",
    points: 25,
  };

  const totalStouts = members.reduce(
    (sum, member) => sum + member.stouts,
    0
  );

  const totalGees = members.reduce(
    (sum, member) => sum + member.gees,
    0
  );

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-5xl">

        <h1 className="mb-8 text-4xl font-bold">
          Wake Me Up Igor Thiago
        </h1>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-2xl font-semibold">
              🏆 Winner
            </h2>

            <p className="mt-4 text-xl">
              {winner.name}
            </p>

            <p>{winner.points} points</p>

          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-2xl font-semibold">
              💀 Loser
            </h2>

            <p className="mt-4 text-xl">
              {loser.name}
            </p>

            <p>{loser.points} points</p>

          </div>

        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">

          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-xl font-semibold">
              🍺 Total Stouts Owed
            </h2>

            <p className="mt-4 text-3xl font-bold">
              {totalStouts}
            </p>

          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="text-xl font-semibold">
              🍻 Total Gees Drinks Owed
            </h2>

            <p className="mt-4 text-3xl font-bold">
              {totalGees}
            </p>

          </div>

        </div>

        <div className="mt-8 rounded-lg bg-white p-6 shadow">

          <h2 className="mb-4 text-2xl font-semibold">
            League Summary
          </h2>

          {members.map((member) => (
            <div
              key={member.name}
              className="flex justify-between border-b py-3"
            >
              <span>{member.name}</span>

              <span>
                🍺 {member.stouts} | 🍻 {member.gees}
              </span>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}