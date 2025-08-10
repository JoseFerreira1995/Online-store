import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export async function loader() {
  return {
    projectsCompleted: 120,
    happyClients: 75,
    yearsInBusiness: 10,
  };
}

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 50);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        setCount(target);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}</span>;
}

export default function About() {
  const data = useLoaderData<typeof loader>();



  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <section className="flex flex-col sm:flex-row gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Projects Completed</h2>
          <Counter target={data.projectsCompleted} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Happy Clients</h2>
          <Counter target={data.happyClients} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Years in Business</h2>
          <Counter target={data.yearsInBusiness} />
        </div>
      </section>
      <section className="mt-10">
        <p>
          We are passionate about delivering high-quality products and
          exceptional service. Our dedicated team works closely with clients to
          ensure every project is a success.
        </p>
      </section>
    </main>
  );
}
