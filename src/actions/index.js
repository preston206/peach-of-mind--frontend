import axios from 'axios';


// // //
// NOTE: when testing locally, toggle baseURL- and make server side changes too
// // //
// const baseURL = 'http://localhost:8080/api/v1/';
const baseURL = 'https://sleepy-castle-79477.herokuapp.com/api/v1/';


// // // CHILD ACTIONS // // //

// get all children associated with a specific user\parent
export const getChildren = (parent) => {

    const endpoint = 'children';
    const pid = parent;

    const request = axios.get(`${baseURL}${endpoint}/${pid}`, { withCredentials: true })
        .then(response => response.data)
        .catch(error => {
            if (error) return Promise.reject({ error });
        });

    return {
        type: 'GET_CHILDREN',
        payload: request
    }
};

// get specific child profile
export const getChild = (parent, child) => {

    const endpoint = 'children';
    const pid = parent;
    const cid = child;

    const request = axios.get(`${baseURL}${endpoint}/${pid}/${cid}`, { withCredentials: true })
        .then(response => response.data)
        .catch(error => {
            if (error) return Promise.reject({ error });
        });

    return {
        type: 'GET_CHILD',
        payload: request
    }
};

// add child profile
export const addChild = (parent, childName) => {

    const endpoint = 'children';
    const pid = parent;

    // send post with axios
    const request = axios.post(`${baseURL}${endpoint}/${pid}`, childName, { withCredentials: true })
        .then(response => response.data)
        .catch(error => {
            if (error) return Promise.reject({ error });
        });

    return {
        type: 'ADD_CHILD',
        payload: request
    }
};

// edit child profile
export const editChild = (parent, child, childName) => {

    const endpoint = 'children';
    const pid = parent;
    const cid = child;

    // send put with axios
    const request = axios.put(`${baseURL}${endpoint}/${pid}/${cid}`, childName, { withCredentials: true })
        .then(response => response.data)
        .catch(error => {
            if (error) return Promise.reject({ error });
        });

    return {
        type: 'EDIT_CHILD',
        payload: request
    }
};

// delete child profile
export const deleteChild = (parent, child) => {

    const endpoint = 'children';
    const pid = parent;
    const cid = child;

    // send delete with axios
    const request = axios.delete(`${baseURL}${endpoint}/${pid}/${cid}`, { withCredentials: true })
        .then(response => response.data)
        .catch(error => {
            if (error) return Promise.reject({ error });
        });

    return {
        type: 'DELETE_CHILD',
        payload: request
    }
};


// // // ALLERGEN ACTIONS // // //

// get all allergens for specific child profile
export const getAllergens = (parent, child) => {

    const endpoint = 'allergens';
    const pid = parent;
    const cid = child;

    const request = axios.get(`${baseURL}${endpoint}/${pid}/${cid}`, { withCredentials: true })
        .then(response => response.data)
        .catch(error => {
            if (error) return Promise.reject({ error });
        });

    return {
        type: 'GET_ALLERGENS',
        payload: request
    }
};

// get single allergen for specific child profile
export const getAllergen = (parent, child, allergen) => {

    const endpoint = 'allergens';
    const pid = parent;
    const cid = child;
    const aid = allergen;

    const request = axios.get(`${baseURL}${endpoint}/${pid}/${cid}/${aid}`, { withCredentials: true })
        .then(response => response.data)
        .catch(error => {
            if (error) return Promise.reject({ error });
        });

    return {
        type: 'GET_ALLERGEN',
        payload: request
    }
};

// add new allergen for specific child profile
export const addAllergen = (parent, child, allergen) => {

    const endpoint = 'allergens';
    const pid = parent;
    const cid = child;

    const request = axios.post(`${baseURL}${endpoint}/${pid}/${cid}`, allergen, { withCredentials: true })
        .then(response => response.data)
        .catch(error => {
            if (error) return Promise.reject({ error });
        });

    return {
        type: 'ADD_ALLERGEN',
        payload: request
    }
};

// edit allergen details for specific child profile
export const editAllergen = (parent, child, allergen, allergenValues) => {

    const endpoint = 'allergens';
    const pid = parent;
    const cid = child;
    const aid = allergen;

    const request = axios.put(`${baseURL}${endpoint}/${pid}/${cid}/${aid}`, allergenValues, { withCredentials: true })
        .then(response => response.data)
        .catch(error => {
            if (error) return Promise.reject({ error });
        });

    return {
        type: 'EDIT_ALLERGEN',
        payload: request
    }
};

// delete allergen for specific child profile
export const deleteAllergen = (parent, child, allergen) => {

    const endpoint = 'allergens';
    const pid = parent;
    const cid = child;
    const aid = allergen;

    const request = axios.delete(`${baseURL}${endpoint}/${pid}/${cid}/${aid}`, { withCredentials: true })
        .then(response => response.data)
        .catch(error => {
            if (error) return Promise.reject({ error });
        });

    return {
        type: 'DELETE_ALLERGEN',
        payload: request
    }
};


// // // REG AND AUTH ACTIONS // // //

// register
export const register = (parent) => {

    const endpoint = 'parents/register';

    const request = axios.post(`${baseURL}${endpoint}`, parent, { withCredentials: true })
        .then(response => response)
        .catch(error => {
            if (error) return Promise.reject({ error });
        });

    return {
        type: 'REGISTER',
        payload: request
    }
};


// login
export const login = (parent) => {

    const endpoint = 'parents/login';

    const request = axios.post(`${baseURL}${endpoint}`, parent, { withCredentials: true })
        .then(response => response)
        .catch(error => {
            if (error) return Promise.reject({ error });
        });

    return {
        type: 'LOGIN',
        payload: request
    }
};

// logout
export const logout = () => {

    const endpoint = 'parents/logout';

    const request = axios.get(`${baseURL}${endpoint}`, { withCredentials: true })
        .then(response => response)
        .catch(error => {
            if (error) return Promise.reject({ error });
        });

    return {
        type: 'LOGOUT',
        payload: request
    }
};