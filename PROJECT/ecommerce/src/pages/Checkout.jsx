function Checkout() {
    return (
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-2 border" />
          <input type="email" placeholder="Email" className="w-full p-2 border" />
          <input type="text" placeholder="Address" className="w-full p-2 border" />
          <button type="submit" className="bg-black text-white px-4 py-2 rounded">
            Confirm Order
          </button>
        </form>
        <p className="mt-4">Order confirmed! (Static demo)</p>
      </div>
    );
  }
  
  export default Checkout;