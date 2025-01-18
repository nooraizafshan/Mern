// import React, { useState, useEffect } from 'react';

// const Read = () => {
//     const [data, setData] = useState([]);
//     const [error, setError] = useState("");
//     const [editingItem, setEditingItem] = useState(null); // State to track the item being edited
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [age, setAge] = useState("");

//     // Fetch data from the API
//     const getData = async () => {
//         try {
//             const response = await fetch('http://localhost:5000');
            
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
            
//             const result = await response.json();
//             setData(result);
//         } catch (error) {
//             setError(`There was a problem with the fetch operation: ${error.message}`);
//         }
//     };

//     // Handle delete operation
//     const handleDelete = async (id) => {
//         try {
//             const response = await fetch(`http://localhost:5000/${id}`, {
//                 method: 'DELETE',
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to delete the record');
//             }

//             const result = await response.json();
//             setError("Record deleted successfully");

//             // Refresh the data after deletion
//             getData();
//         } catch (error) {
//             setError(`There was a problem with the delete operation: ${error.message}`);
//         }
//     };

//     // Handle edit operation
//     const handleEdit = (item) => {
//         setEditingItem(item._id);
//         setName(item.name);
//         setEmail(item.email);
//         setAge(item.age);
//     };

//     // Handle update operation
//     const handleUpdate = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch(`http://localhost:5000/${editingItem}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ name, email, age }),
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to update the record');
//             }

//             const result = await response.json();
//             setError("Record updated successfully");

//             // Clear editing state and refresh the data
//             setEditingItem(null);
//             setName("");
//             setEmail("");
//             setAge("");
//             getData();
//         } catch (error) {
//             setError(`There was a problem with the update operation: ${error.message}`);
//         }
//     };

//     // Fetch data when the component is mounted
//     useEffect(() => {
//         getData();
//     }, []);

//     return (
//         <div className='my-2 container'>
//             {error && <div className='alert alert-danger'>{error}</div>}
//             <h2 className='text-center'>All data</h2>
//             <div className='row'>
//                 {data.length > 0 ? data.map((item, index) => (
//                     <div key={index} className='col-3'>
//                         <div className='card'>
//                             <div className='card-body'>
//                                 <h5 className='card-title'>{item.name}</h5>
//                                 <h6 className='card-subtitle mb-2 text-muted'>{item.email}</h6>
//                                 <p className='text-muted'>{item.age}</p>
//                                 <a href="#" className='card-link' onClick={() => handleEdit(item)}>Edit</a>
//                                 <a href="#" className='card-link' onClick={() => handleDelete(item._id)}>Delete</a>
//                             </div>
//                         </div>
//                     </div>
//                 )) : (
//                     <p className='text-center'>No data available</p>
//                 )}
//             </div>

//             {editingItem && (
//                 <div className='edit-form mt-4'>
//                     <h2 className='text-center'>Edit Item</h2>
//                     <form onSubmit={handleUpdate}>
//                         <div className="mb-3">
//                             <label htmlFor="nameInput" className="form-label">Enter Name</label>
//                             <input 
//                                 type="text" 
//                                 className="form-control" 
//                                 id="nameInput" 
//                                 value={name} 
//                                 onChange={(e) => setName(e.target.value)} 
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="emailInput" className="form-label">Email address</label>
//                             <input 
//                                 type="email" 
//                                 className="form-control" 
//                                 id="emailInput" 
//                                 value={email} 
//                                 onChange={(e) => setEmail(e.target.value)} 
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="ageInput" className="form-label">Age</label>
//                             <input 
//                                 type="number" 
//                                 className="form-control" 
//                                 id="ageInput" 
//                                 value={age} 
//                                 onChange={(e) => setAge(Number(e.target.value))} 
//                             />
//                         </div>
//                         <button type="submit" className="btn btn-primary">Update</button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Read;
import React, { useState, useEffect } from 'react';

const Read = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [editingItem, setEditingItem] = useState(null); // State to track the item being edited
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    // Fetch data from the API
    const getData = async () => {
        try {
            const response = await fetch('http://localhost:5000');
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(`There was a problem with the fetch operation: ${error.message}`);
        }
    };

    // Handle delete operation
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete the record');
            }

            setError("Record deleted successfully");

            // Refresh the data after deletion
            getData();
        } catch (error) {
            setError(`There was a problem with the delete operation: ${error.message}`);
        }
    };

    // Handle edit operation
    const handleEdit = (item) => {
        setEditingItem(item._id);
        setName(item.name);
        setEmail(item.email);
        setAge(item.age);
    };

    // Handle update operation

    // const handleUpdate = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await fetch(`http://localhost:5000/${editingItem}`, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ name, email, age }),
    //         });

    //         if (!response.ok) {
    //             const errorText = await response.text();
    //             throw new Error(`Failed to update the record: ${errorText}`);
    //         }

    //         setError("Record updated successfully");

    //         // Clear editing state and refresh the data
    //         setEditingItem(null);
    //         setName("");
    //         setEmail("");
    //         setAge("");
    //         getData();
    //     } catch (error) {
    //         setError(`There was a problem with the update operation: ${error.message}`);
    //     }
    // };
// In your React component (e.g., UserEdit.js)
   const handleUpdate = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`http://localhost:5000/${editingItem}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, age }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to update the record: ${errorText}`);
        }

        const result = await response.json();
        setError("Record updated successfully");

        // Clear editing state and refresh the data
        setEditingItem(null);
        setName("");
        setEmail("");
        setAge("");
        getData();
    } catch (error) {
        setError(`There was a problem with the update operation: ${error.message}`);
    }
};

    // Fetch data when the component is mounted
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='my-2 container'>
            {error && <div className='alert alert-danger'>{error}</div>}
            <h2 className='text-center'>All data</h2>
            <div className='row'>
                {data.length > 0 ? data.map((item, index) => (
                    <div key={index} className='col-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>{item.name}</h5>
                                <h6 className='card-subtitle mb-2 text-muted'>{item.email}</h6>
                                <p className='text-muted'>{item.age}</p>
                                <a href="#" className='card-link' onClick={() => handleEdit(item)}>Edit</a>
                                <a href="#" className='card-link' onClick={() => handleDelete(item._id)}>Delete</a>
                            </div>
                        </div>
                    </div>
                )) : (
                    <p className='text-center'>No data available</p>
                )}
            </div>

            {editingItem && (
                <div className='edit-form mt-4'>
                    <h2 className='text-center'>Edit Item</h2>
                    <form onSubmit={handleUpdate}>
                        <div className="mb-3">
                            <label htmlFor="nameInput" className="form-label">Enter Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="nameInput" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="emailInput" className="form-label">Email address</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="emailInput" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ageInput" className="form-label">Age</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="ageInput" 
                                value={age} 
                                onChange={(e) => setAge(Number(e.target.value))} 
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Read;
