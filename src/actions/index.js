import axios from 'axios';
const baseURL = 'https://sleepy-castle-79477.herokuapp.com/api/v1/';


// // // CHILD ACTIONS // // //

// get all children associated with a specific user\parent
export const getChildren = () => {

    const endpoint = 'children';
    const pid = '/5a85d2f13b2f32310c0d1705';

    const request = axios.get(`${baseURL}${endpoint}${pid}`)
        .then(response => response.data)
        .catch(error => console.log(error));

    return {
        type: 'GET_CHILDREN',
        payload: request
    }
};

// get specific child profile
export const getChild = () => {

    const endpoint = 'children';
    const pid = '/5a85d2f13b2f32310c0d1705';
    const cid = '/5a85d4313b2f32310c0d1708';

    const request = axios.get(`${baseURL}${endpoint}${pid}${cid}`)
        .then(response => response.data)
        .catch(error => console.log(error));

    return {
        type: 'GET_CHILD',
        payload: request
    }
};

// add child profile
export const addChild = () => {

    const endpoint = 'children';
    const pid = '/5a85d2f13b2f32310c0d1705';

    // send post with axios
    const request = axios.post(`${baseURL}${endpoint}${pid}`)
        .then(response => response.data)
        .catch(error => console.log(error));

    return {
        type: 'ADD_CHILD',
        payload: request
    }
};

// edit child profile
export const editChild = () => {

    const endpoint = 'children';
    const pid = '/5a85d2f13b2f32310c0d1705';
    const cid = '/5a85d4313b2f32310c0d1708';

    // send put with axios
    const request = axios.put(`${baseURL}${endpoint}${pid}${cid}`)
        .then(response => response.data)
        .catch(error => console.log(error));

    return {
        type: 'EDIT_CHILD',
        payload: request
    }
};

// delete child profile
export const deleteChild = () => {

    const endpoint = 'children';
    const pid = '/5a85d2f13b2f32310c0d1705';
    const cid = '/5a85d4313b2f32310c0d1708';

    // send delete with axios
    const request = axios.delete(`${baseURL}${endpoint}${pid}${cid}`)
        .then(response => response.data)
        .catch(error => console.log(error));

    return {
        type: 'DELETE_CHILD',
        payload: request
    }
};


// // // ALLERGEN ACTIONS // // //

// get all allergens for specific child profile
export const getAllergens = () => {

    const endpoint = 'allergens';
    const pid = '/5a85d2f13b2f32310c0d1705';
    const cid = '/5a85d4313b2f32310c0d1708';

    const request = axios.get(`${baseURL}${endpoint}${pid}${cid}`)
        .then(response => response.data)
        .catch(error => console.log(error));

    return {
        type: 'GET_ALLERGENS',
        payload: request
    }
};

// get single allergen for specific child profile
export const getAllergen = () => {

    const endpoint = 'allergens';
    const pid = '/5a85d2f13b2f32310c0d1705';
    const cid = '/5a85d4313b2f32310c0d1708';
    const aid = '/5a85d6ff3b2f32310c0d170c';

    const request = axios.get(`${baseURL}${endpoint}${pid}${cid}${aid}`)
        .then(response => response.data)
        .catch(error => console.log(error));

    return {
        type: 'GET_ALLERGEN',
        payload: request
    }
};

// add new allergen for specific child profile
export const addAllergen = () => {

    const endpoint = 'allergens';
    const pid = '/5a85d2f13b2f32310c0d1705';
    const cid = '/5a85d4313b2f32310c0d1708';

    const request = axios.post(`${baseURL}${endpoint}${pid}${cid}`)
        .then(response => response.data)
        .catch(error => console.log(error));

    return {
        type: 'ADD_ALLERGEN',
        payload: request
    }
};

// edit allergen details for specific child profile
export const editAllergen = () => {

    const endpoint = 'allergens';
    const pid = '/5a85d2f13b2f32310c0d1705';
    const cid = '/5a85d4313b2f32310c0d1708';
    const aid = '/5a85d6ff3b2f32310c0d170c';

    const request = axios.put(`${baseURL}${endpoint}${pid}${cid}${aid}`)
        .then(response => response.data)
        .catch(error => console.log(error));

    return {
        type: 'EDIT_ALLERGEN',
        payload: request
    }
};

// delete allergen for specific child profile
export const deleteAllergen = () => {

    const endpoint = 'allergens';
    const pid = '/5a85d2f13b2f32310c0d1705';
    const cid = '/5a85d4313b2f32310c0d1708';
    const aid = '/5a85d6ff3b2f32310c0d170c';

    const request = axios.delete(`${baseURL}${endpoint}${pid}${cid}${aid}`)
        .then(response => response.data)
        .catch(error => console.log(error));

    return {
        type: 'DELETE_ALLERGEN',
        payload: request
    }
};


// // // USER\PARENT ACTIONS // // //

// register
// const endpoint = 'parents';
// const pid = '/5a85d2f13b2f32310c0d1705';

// login


// logout