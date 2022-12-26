const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')

const getTickets = asyncHandler( async () => {

})

const createTicket = asyncHandler( async () => {

})

module.exports = {
  getTickets,
  createTicket
}