const token = ''
export const server_calls = {
    get: async () => {
        const response = await fetch('', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        
        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(``,
        {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to Update data on server')
        }

        return await response.json()
    },
}

    delete: async (id:string) => {
        const response = await fetch(`https:// #insert here ${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            }
        })

        if (!response.ok){
            throw new Error('Failed to Delete data on server')
        }

        return;
    },
}
