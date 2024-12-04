
import { useState, useEffect } from 'react';
import { Pie, Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend, BarElement } from 'chart.js';

// Register Chart.js elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const Dashboard = () => {
  const [userStats, setUserStats] = useState({
    activeUsers: 50,
    nonActiveUsers: 30,
    totalUsers: 80,
    totalRoles: 5,
    totalPermissions: 10,
    admins: 10,
    editors: 20,
    viewers: 50,
  });

  useEffect(() => {
    setTimeout(() => {
      setUserStats({
        activeUsers: 60,
        nonActiveUsers: 25,
        totalUsers: 85,
        totalRoles: 6,
        totalPermissions: 14,
        admins: 15,
        editors: 30,
        viewers: 40,
      });
    }, 2000);
  }, []);

  // Active vs Non-Active Users (Doughnut Chart)
  const userChartData = {
    labels: ['Active', 'Non-Active'],
    datasets: [
      {
        label: 'Users',
        data: [userStats.activeUsers, userStats.nonActiveUsers],
        backgroundColor: ['#4CAF50', '#FF5733'],
        hoverBackgroundColor: ['#81C784', '#FF8A80'],
        borderWidth: 2,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      tooltip: { enabled: true },
      legend: {
        position: 'top',
        labels: {
          color: '#ffffff', // Bright legend labels
        },
      },
      datalabels: {
        color: '#ffffff', // Bright data label color
        font: {
          weight: 'bold',
        },
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  // Roles vs Permissions (Bar Chart)
  const rolesPermissionsChartData = {
    labels: ['Roles', 'Permissions'],
    datasets: [
      {
        label: 'Count',
        data: [userStats.totalRoles, userStats.totalPermissions],
        backgroundColor: ['#2196F3', '#FFC107'],
        hoverBackgroundColor: ['#42A5F5', '#FFCA28'],
        borderRadius: 10,
        borderWidth: 2,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      tooltip: { enabled: true },
      legend: {
        position: 'top',
        labels: {
          color: '#ffffff', // Bright legend labels
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#ffffff', // Bright axis labels
        },
        grid: {
          color: '#ffffff', // White grid lines
        },
      },
      x: {
        ticks: {
          color: '#ffffff', // Bright axis labels
        },
        grid: {
          color: '#ffffff', // White grid lines
        },
      },
    },
    animation: {
      duration: 1500,
      easing: 'easeInOutQuart',
    },
  };

  // Admins, Editors, Viewers (Pie Chart)
  const userRoleChartData = {
    labels: ['Admins', 'Editors', 'Viewers'],
    datasets: [
      {
        label: 'Role Distribution',
        data: [userStats.admins, userStats.editors, userStats.viewers],
        backgroundColor: ['#FF5733', '#4CAF50', '#2196F3'],
        hoverOffset: 5,
        borderWidth: 0,
      },
    ],
  };

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      tooltip: { enabled: true },
      legend: {
        position: 'top',
        labels: {
          color: '#ffffff', // Bright legend labels
        },
      },
      datalabels: {
        color: '#ffffff', // Bright data label color
        font: {
          weight: 'bold',
        },
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  return (
    <div className="p-6" style={{
      backgroundImage: "url(https://img.freepik.com/free-vector/gradient-abstract-wireframe-background_23-2149009903.jpg?t=st=1733292133~exp=1733295733~hmac=d78622a7921df9b35ac42000b74a79eb788cd03044ca77fa1dd2e210a0956d22)",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      {/* Flex container for charts */}
      <div className="flex flex-wrap justify-between gap-6">

        {/* Active vs Non-Active Users (Doughnut Chart) */}
        <div className="bg-blue-950 border border-white-100 p-4 rounded-lg shadow-lg mb-6 sm:w-1/3 lg:w-1/4">
          <h3 className="text-xl text-white font-semibold mb-4 text-center">Active vs Non-Active Users</h3>
          <Doughnut 
            data={userChartData}
            options={doughnutOptions}
          />
        </div>

        {/* Roles and Permissions (Bar Chart) */}
        <div className="bg-blue-950 border border-white-100 p-4 rounded-lg shadow-lg mb-6 sm:w-1/2 lg:w-1/3 lg:h-1/8">
          <h3 className="text-xl font-semibold mb-4 text-center text-white">Roles vs Permissions</h3>
          <Bar
            data={rolesPermissionsChartData}
            options={barChartOptions}
          />
        </div>

        {/* Admins, Editors, Viewers (Pie Chart) */}
        <div className="bg-blue-950 border border-white-100 text-white p-4 rounded-lg shadow-lg mb-6 sm:w-1/2 lg:w-1/4">
          <h3 className="text-xl font-semibold mb-4 text-center text-white">Total Users Role Distribution</h3>
          <Pie 
            data={userRoleChartData}
            options={pieChartOptions}
          />
        </div>
      </div>

      {/* Recent Activities and Pending Actions */}
      <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Recent Activities */}
        <div className="bg-blue-950 border border-white-100 p-4 rounded-lg shadow-lg">
          <h4 className="font-semibold text-white text-lg">Recent Activities</h4>
          <ul className="space-y-3 text-white">
            <li>User "John Doe" was assigned a new role "Editor".</li>
            <li>Permission "Delete" was granted to "Admin".</li>
            <li>User "Jane Smith" logged in successfully.</li>
          </ul>
        </div>

        {/* Pending Actions */}
        <div className="bg-blue-950 border border-white-100 text-white p-4 rounded-lg shadow-lg">
          <h4 className="font-semibold text-white text-lg">Pending Actions</h4>
          <ul className="space-y-3">
            <li>Review pending for 3 user registrations.</li>
            <li>New roles require review and approval.</li>
            <li>Permissions for Editor need to be updated.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
