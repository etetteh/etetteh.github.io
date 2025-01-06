import { useState, useEffect } from 'react';

export default function Copyright() {
  const [year, setYear] = useState(new Date().getFullYear());
  
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
      <p>© {year} Enoch Tetteh | All Rights Reserved.</p>
    </div>
  );
}