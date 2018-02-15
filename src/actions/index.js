import axios from 'axios';
const baseURL = 'https://sleepy-castle-79477.herokuapp.com/api/v1/';


// // // CHILD ACTIONS // // //

// get all children associated with a specific user\parent
export const getChildren = () => {

    const endpoint = 'children';
    const pid = '/5a7f700d464a78226c786a80';

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
    const pid = '/5a7f700d464a78226c786a80';
    const cid = '/5a7f70f0bfe1472840415306';

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
    const pid = '/5a7f700d464a78226c786a80';

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
    const pid = '/5a7f700d464a78226c786a80';
    const cid = '/5a7f70f0bfe1472840415306';

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
    const pid = '/5a7f700d464a78226c786a80';
    const cid = '/5a7f70f0bfe1472840415306';

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
    const pid = '/5a7f700d464a78226c786a80';
    const cid = '/5a7f70f0bfe1472840415306';

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
    const pid = '/5a7f700d464a78226c786a80';
    const cid = '/5a7f70f0bfe1472840415306';
    const aid = '/';

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
    const pid = '/5a7f700d464a78226c786a80';
    const cid = '/5a7f70f0bfe1472840415306';

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
    const pid = '/5a7f700d464a78226c786a80';
    const cid = '/5a7f70f0bfe1472840415306';
    const aid = '/';

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
    const pid = '/5a7f700d464a78226c786a80';
    const cid = '/5a7f70f0bfe1472840415306';
    const aid = '/';

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
// const pid = '/5a7f700d464a78226c786a80';

// login


// logout