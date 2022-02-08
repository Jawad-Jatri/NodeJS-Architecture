const ResponseMessage = {
  SUCCESS: "SUCCESS!",
  ERROR  : "SOMETHING WENT WRONG.PLEASE CHECK.",
  CAST_ERROR  : "No item found with id : ",
  DUPLICATE_ERROR  : "Duplicate value entered for field : ",
  NAME_FIELD_REQUIRED : "name field is required!",
  PHONE_FIELD_REQUIRED : "phone field is required!",
  PASSWORD_FIELD_REQUIRED : "password field is required!",
  USER_TYPE_FIELD_REQUIRED : "user type field is required!",
  ROLES_FIELD_REQUIRED : "roles field is required!",
  STATUS_FIELD_REQUIRED : "status field is required!",
  VALIDATOR_FIELD_EXIST : "{PATH} already exists!",
  INVALID_REQUEST_PAYLOAD: "Invalid request payload!",

  AUTHENTICATION_ERROR : "Auth Failed!",
  ROUTE_NOT_EXIST : "Route does not exist!",
  ACCESS_DENIED        : "Access denied!",
  TOKEN_EXPIRED        : "Token Expired!",
  REFRESH_TOKEN_SUCCESS: "Token refreshed Successfully!",
  LOGIN_SUCCESS        : "Login Successful!",

  USER_BANNED       : "User banned!",
  USER_NOT_FOUND    : "User not found!",
  INVALID_USER      : "Invalid username / password!",
  USER_ADDED_SUCCESS: "User added successfully!",

  COMPANY_NOT_FOUND: "Company not found!",

  ROUTE_EXIST    : "Route already exists!",
  ROUTE_NOT_FOUND: "Route not found!",

  BOARDING_PLACE_EXIST    : "Boarding place already exists!",
  BOARDING_PLACE_NOT_FOUND: "Boarding place not found!",

  DROPPING_POINT_EXIST    : "Dropping point already exists!",
  DROPPING_POINT_NOT_FOUND: "Dropping point not found!",

  OWNER_NOT_FOUND      : "Owner not found!",
  OWNER_ADDED_SUCCESS  : "Owner added successfully!",
  OWNER_UPDATED_SUCCESS: "Owner updated successfully!",
  OWNER_DELETED_SUCCESS: "Owner deleted successfully!",

  STOPPAGE_EXIST: "Stoppage already exists!",
  STOPPAGE_NOT_FOUND: "Stoppage not found!",

  FARE_EXIST    : "Fare for this route already exists!",


  ADMIN_NOT_FOUND      : "Admin not found!",
  ADMIN_ADDED_SUCCESS  : "Admin added successfully!",
  ADMIN_UPDATED_SUCCESS: "Admin updated successfully!",
  ADMIN_DELETED_SUCCESS: "Admin updated successfully!",

  COMPANY_ADDED_SUCCESS  : "Company added successfully!",
  COMPANY_UPDATED_SUCCESS: "Company updated successfully!",

  ROUTE_ADDED_SUCCESS  : "Route added successfully!",
  ROUTE_UPDATED_SUCCESS: "Route updated successfully!",

  BOARDING_PLACE_ADDED_SUCCESS  : "Boarding place added successfully!",
  BOARDING_PLACE_UPDATED_SUCCESS: "Boarding place updated successfully!",
  BOARDING_PLACE_DELETED_SUCCESS: "Boarding place deleted successfully!",


  DROPPING_POINT_ADDED_SUCCESS  : "Dropping point added successfully!",
  DROPPING_POINT_UPDATED_SUCCESS: "Dropping point updated successfully!",
  DROPPING_POINT_DELETED_SUCCESS: "Dropping point deleted successfully!",


  AGENT_NOT_FOUND      : "Agent not found!",
  AGENT_ADDED_SUCCESS  : "Agent added successfully!",
  AGENT_UPDATED_SUCCESS: "Agent updated successfully!",

  COUNTERMAN_NOT_FOUND      : "Counterman not found!",
  COUNTERMAN_ADDED_SUCCESS  : "Counterman added successfully!",
  COUNTERMAN_UPDATED_SUCCESS: "Counterman updated successfully!",

  DRIVER_NOT_FOUND      : "Driver not found!",
  DRIVER_ADDED_SUCCESS  : "Driver added successfully!",
  DRIVER_UPDATED_SUCCESS: "Driver updated successfully!",

  SUPERVISOR_ADDED_SUCCESS  : "Supervisor added successfully!",
  SUPERVISOR_UPDATED_SUCCESS: "Supervisor updated successfully!",
  SUPERVISOR_NOT_FOUND: "Supervisor not found!",

  SEAT_PLAN_ADDED_SUCCESS  : "Seat plan added successfully!",
  SEAT_PLAN_UPDATED_SUCCESS: "Seat plan updated successfully!",

  FARE_ADDED_SUCCESS  : "Fare for this route added successfully!",
  FARE_UPDATED_SUCCESS: "Fare for this route updated successfully!",
  FARE_DELETED_SUCCESS: "Fare deleted successfully!",

  COUNTER_ADDED_SUCCESS  : "Counter added successfully!",
  COUNTER_UPDATED_SUCCESS: "Counter updated successfully!",
  COUNTER_NOT_FOUND      : "Counter not found!",
  COUNTER_ALREADY_EXISTS : "Counter already exists!",

  COACH_EXIST: "Coach already exists!",

  TRIP_NOT_FOUND      : "Trip not found!",
  TRIP_ADDED_SUCCESS  : "Trip added successfully!",
  TRIP_UPDATED_SUCCESS: "Trip updated successfully!",
  TRIP_CANCEL_SUCCESS: "Trip cancelled successfully!",

  INVALID_STOPPAGE_SELECTION: "Requested from & to stoppages are not valid!",
  INVALID_SEAT_NUMBERS: "Invalid seat numbers",
  SOLD_SEATS: " seats are already sold!",
  RESERVED_SEATS: " seats are already reserved!",
  TICKET_NOT_FOUND      : "Ticket not found!",
  TICKET_PURCHASED_SUCCESS : "Ticket purchased successfully!",
  TICKET_RESERVED_SUCCESS : "Ticket reserved successfully!",
  TICKET_CANCELLED_SUCCESS : "Ticket cancelled successfully!",
  RESERVED_CANCELLED_SUCCESS : "Reserved cancelled successfully!",
  TICKET_PURCHASED_UNSUCCESSFUL : "Something went wrong.Ticket purchased unsuccessful!",
  TICKET_RESERVED_UNSUCCESSFUL : "Something went wrong.Ticket reserved unsuccessful!",
  RESERVED_CANCELLED_UNSUCCESSFUL : "Something went wrong.Reserved cancelled unsuccessful!",
  TICKET_CANCELLED_UNSUCCESSFUL : "Something went wrong.Ticket cancelled unsuccessful!",
  TICKET_CANCELLED_FOR_MIXED_UNSUCCESSFUL : "Ticket cancel for mixed seater not available!",
  TRIP_PASS_ALREADY_EXIST : "You already pass this trip!",
  TRIP_PASS_ADDED_SUCCESS : "Trip pass added successfully!",
  TICKET_NOT_ACCEPTABLE_FOR_TRIP_PASS : "Purchase ticket rejected as you already pass this trip !",
  INVALID_GOODS_WEIGHT: "Invalid goods weight!",

  DISCOUNT_NOT_ALLOWED : "You don't have any discount permission!",
  TICKET_CANCEL_NOT_ALLOWED : "You can't cancel other's created ticket!",
  FARE_NOT_FOUND      : "Fare not found!",

  SOMEONE_TRYING_SAME_SEATS :"Someone trying with same seats!",
  TRIP_NOT_ALLOWED          :  "Trip not allowed for reservation",
  RESERVATION_NOT_ALLOWED   :"Reservation not allowed",
  CANCEL_RESERVATION_NOT_ALLOWED   :"Reservation cancel not allowed",
  PARTIAL_CANCEL_RESERVATION_NOT_ALLOWED   :"Partial reservation cancel not allowed",
}

module.exports = {
  ResponseMessage
}
