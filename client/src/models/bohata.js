

export const getAllBohatas = async () => {
    const req = await fetch("http://localhost:3000/bohatas", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "GET"
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
}

export const getBohataById = async (id) => {
    const req = await fetch(`http://localhost:3000/bohatas/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "GET"
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
}

export const createBohata = async (formData) => {
    const req = await fetch(`http://localhost:3000/bohatas`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(formData)
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
}

export const updateBohata = async (id, formData) => {
    const req = await fetch(`http://localhost:3000/bohatas/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(formData)
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
}

export const deleteBohata = async (id) => {
    const req = await fetch(`http://localhost:3000/bohatas/${id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        method: "DELETE",
    });
    const data = await req.json();
    return {
        status: req.status,
        message: data.message,
        payload: data.payload
    }
}

