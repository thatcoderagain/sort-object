# Sort Object
The following functions sorts an array of objects, when object key is not sufficient to sort in the desired order.

Usage

```
// Array of objects to be sorted (map in the same order as the sequence object).
const dataObject = [
  {
    id: '07c12d8dd4ab4492afe3c0d5d78cd09e',
    name: "John",
  },
  {
    id: '6c6e77c334e646d98617c7faccf701a8',
    name: "Cal",
  },
  {
    id: '7ca269e3c88e4247a78f54c4526f27ca',
    name: "Emi",
  },
  {
    id: 'f9876e90d6444d5581a3e927b36a2362',
    name: "Sara",
  },
];

// Array of objects in the desired order in which `dataObject` array should be sorted. 
const sequenceObject = [
  {
    id: '6c6e77c334e646d98617c7faccf701a8',
  },
  {
    id: 'f9876e90d6444d5581a3e927b36a2362',
  },
  {
    id: '7ca269e3c88e4247a78f54c4526f27ca',
  },
  {
    id: '07c12d8dd4ab4492afe3c0d5d78cd09e',
  },
];

// Calling the sorting function
const sortedData = sortObject(dataObject, sequenceObject, 'id');

/**
vaue of sortedData would be 
[
  {
    id: '6c6e77c334e646d98617c7faccf701a8',
    name: "Cal",
  },
  {
    id: 'f9876e90d6444d5581a3e927b36a2362',
    name: "Sara",
  },
  {
    id: '7ca269e3c88e4247a78f54c4526f27ca',
    name: "Emi",
  },
  {
    id: '07c12d8dd4ab4492afe3c0d5d78cd09e',
    name: "John",
  }
];
**/

```
