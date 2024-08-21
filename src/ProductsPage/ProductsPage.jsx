import React, { useState, useEffect } from 'react';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [page, setPage] = useState(1);
    const [limit] = useState(10); 
    const [sort, setSort] = useState(''); 
    const [search, setSearch] = useState(''); 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://localhost:5000/product?page=${page}&limit=${limit}&sort=${sort}&search=${search}`);
                const data = await response.json();
                setProducts(data.products);
                setTotalProducts(data.totalProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [page, limit, sort, search]);

    const totalPages = Math.ceil(totalProducts / limit);

    return (
        <div className="p-4 mx-auto mt-5">
            <h1 className="text-3xl font-bold mb-6 mx-auto mt-5">Products</h1>

            <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <input
                    type="text"
                    placeholder="Search by product name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="input input-bordered w-full md:w-1/3"
                />

                <div className="flex gap-4">
                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="select select-bordered"
                    >
                        <option value="">Sort by</option>
                        <option value="priceLowToHigh">Price: Low to High</option>
                        <option value="priceHighToLow">Price: High to Low</option>
                        <option value="dateNewestFirst">Date Added: Newest first</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
                {products.map(product => (
                    <div key={product._id} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p className="text-gray-600">Brand: {product.brand}</p>
                            <p className="text-gray-600">Category: {product.category}</p>
                            <p className="text-xl font-bold">${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center">
                <button
                    onClick={() => setPage(prevPage => Math.max(prevPage - 1, 1))}
                    className="btn btn-primary"
                    disabled={page === 1}
                >
                    Previous
                </button>
                <span> Page {page} of {totalPages} </span>
                <button
                    onClick={() => setPage(prevPage => Math.min(prevPage + 1, totalPages))}
                    className="btn btn-primary"
                    disabled={page === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductsPage;

