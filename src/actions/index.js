import axios from 'axios';
const baseURL = 'https://sleepy-castle-79477.herokuapp.com/api/v1/';


// // // CHILD ACTIONS // // //

// get all children associated with a specific user\parent
export const getChildren = (parent) => {

    const endpoint = 'children';
    // const pid = '/5a85d2f13b2f32310c0d1705';
    const pid = parent;

    const request = axios.get(`${baseURL}${endpoint}/${pid}`)
        .then(response => response.data)
        .catch(error => console.log(error));

    return {
        type: 'GET_CHILDREN',
        payload: request
    }
};

// get specific child profile
export const getChild = (parent, child) => {

    const endpoint = 'children';
    // const pid = '/5a85d2f13b2f32310c0d1705';
    // const cid = '/5a85d4313b2f32310c0d1708';
    const pid = parent;
    const cid = child;

    const request = axios.get(`${baseURL}${endpoint}/${pid}/${cid}`)
        .then(response => response.data)
        .catch(error => console.log(error));

    return {
        type: 'GET_CHILD',
        payload: request
    }
};

// add child profile
export const addChild = (parent, childName) => {

    const endpoint = 'children';
    // const pid = '/5a85d2f13b2f32310c0d1705';
    const pid = parent;

    // send post with axios
    const request = axios.post(`${baseURL}${endpoint}/${pid}`, childName)
        .then(response => response.data)
        .catch(error => console.log(error));

    return {
        type: 'ADD_CHILD',
        payload: request
    }
};

// edit child profile
export const editChild = (parent, child, childName) => {

    const endpoint = 'children';
    // const pid = '/5a85d2f13b2f32310c0d1705';
    // const cid = '/5a85d4313b2f32310c0d1708';
    const pid = parent;
    const cid = child;

    // send put with axios
    const request = axios.put(`${baseURL}${endpoint}/${pid}/${cid}`, childName)
        .then(response => response.data)
        .catch(error => console.log(error));

    return {
        type: 'EDIT_CHILD',
        payload: request
    }
};

// delete child profile
export const deleteChild = (parent, child) => {

    const endpoint = 'children';
    // const pid = '/5a85d2f13b2f32310c0d1705';
    // const cid = '/5a85d4313b2f32310c0d1708';
    const pid = parent;
    const cid = child;

    // send delete with axios
    const request = axios.delete(`${baseURL}${endpoint}/${pid}/${cid}`)
        .then(response => response.data)
        .catch(error => console.log(error));

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
    // const pid = '/5a85d2f13b2f32310c0d1705';
    // const cid = '/5a85d4313b2f32310c0d1708';
    // const cid = '/5a85d5053b2f32310c0d170a';

    const request = axios.get(`${baseURL}${endpoint}/${pid}/${cid}`)
        .then(response => response.data)
        .catch(error => console.log(error));

    return {
        type: 'GET_ALLERGENS',
        payload: request
    }
};

// get single allergen for specific child profile
export const getAllergen = (parent, child, allergen) => {

    const endpoint = 'allergens';
    // const pid = '/5a85d2f13b2f32310c0d1705';
    // const cid = '/5a85d4313b2f32310c0d1708';
    // const aid = '/5a85d6ff3b2f32310c0d170c';
    const pid = parent;
    const cid = child;
    const aid = allergen;

    const request = axios.get(`${baseURL}${endpoint}/${pid}/${cid}/${aid}`)
        .then(response => response.data)
        .catch(error => console.log(error));

    return {
        type: 'GET_ALLERGEN',
        payload: request
    }
};

// add new allergen for specific child profile
export const addAllergen = (parent, child, allergen) => {

    const endpoint = 'allergens';
    // const pid = '/5a85d2f13b2f32310c0d1705';
    // const cid = '/5a85d4313b2f32310c0d1708';
    const pid = parent;
    const cid = child;

    const request = axios.post(`${baseURL}${endpoint}/${pid}/${cid}`, allergen)
        .then(response => response.data)
        .catch(error => console.log(error));

    return {
        type: 'ADD_ALLERGEN',
        payload: request
    }
};

// edit allergen details for specific child profile
export const editAllergen = (parent, child, allergen, allergenValues) => {

    const endpoint = 'allergens';
    // const pid = '/5a85d2f13b2f32310c0d1705';
    // const cid = '/5a85d4313b2f32310c0d1708';
    // const aid = '/5a85d6ff3b2f32310c0d170c';
    const pid = parent;
    const cid = child;
    const aid = allergen;

    const request = axios.put(`${baseURL}${endpoint}/${pid}/${cid}/${aid}`, allergenValues)
        .then(response => response.data)
        .catch(error => console.log(error));

    return {
        type: 'EDIT_ALLERGEN',
        payload: request
    }
};

// delete allergen for specific child profile
export const deleteAllergen = (parent, child, allergen) => {

    const endpoint = 'allergens';
    // const pid = '/5a85d2f13b2f32310c0d1705';
    // const cid = '/5a85d4313b2f32310c0d1708';
    // const aid = '/5a85d6ff3b2f32310c0d170c';
    const pid = parent;
    const cid = child;
    const aid = allergen;

    const request = axios.delete(`${baseURL}${endpoint}/${pid}/${cid}/${aid}`)
        .then(response => response.data)
        .catch(error => console.log(error));

    return {
        type: 'DELETE_ALLERGEN',
        payload: request
    }
};


// // // USER\PARENT ACTIONS // // //

// register
export const register = (parent) => {

    // console.log("parent-", parent);
    const endpoint = 'parents/register';
    // const request = axios.post(`${baseURL}${endpoint}`, parent)

    const request = axios.post(`${baseURL}${endpoint}`, parent)
        .then(response => response.data)
        .catch(error => console.log(error));

    return {
        type: 'REGISTER',
        payload: request
    }

    // return (dispatch) => {
    //     request
    //         .then(response => response.data)
    //         .catch(error => console.log(error));

    //     dispatch({
    //         type: 'REGISTER',
    //         payload: request
    //     })
    // }


    // return (dispatch) => {
    //     request
    //         .then(response => {

    //             dispatch({
    //                 type: 'REGISTER',
    //                 payload: response
    //             })
    //         })
    //         .catch(error => console.log(error));
    // }


    // return {
    //     type: 'REGISTER',
    //     payload: request
    // }
};


// login


// logout