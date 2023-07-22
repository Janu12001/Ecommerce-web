import Navbar from "../features/navbar/Navbar";
import UserOrders from "../features/user/components/UserOrders";
function UserOrdersPage() {
  return (
    <div>
      <Navbar>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 ">
          My Orders
        </h1>
        <UserOrders></UserOrders>
      </Navbar>
    </div>
  );
}

export default UserOrdersPage;
