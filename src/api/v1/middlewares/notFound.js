export const notFound = ({StatusCodes, ResponseMessage}) => {
  return function (req,res){
    res.status(StatusCodes.HTTP_400_BAD_REQUEST).send(ResponseMessage.ROUTE_NOT_EXIST)
  }
}
