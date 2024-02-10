/**
 * @swagger
 * components:
 *   schemas:
 *     ROLE:
 *       type: string
 *       enum:
 *         - ADMIN
 *         - USER
 *
 *     OTP:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         code:
 *           type: string
 *         expiry:
 *           type: string
 *           format: date-time
 *         email:
 *           type: string
 *
 *     VerifyOtpRequest:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *         code:
 *           type: string
 *
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         first_name:
 *           type: string
 *         last_name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         organization:
 *           type: string
 *         role:
 *           $ref: '#/components/schemas/ROLE'
 *         description:
 *           type: string
 *         phone_number:
 *           type: string
 *
 *     LoginRequest:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 *
 *     UserForSignup:
 *       type: object
 *       required:
 *         - first_name
 *         - last_name
 *         - email
 *         - password
 *       properties:
 *         first_name:
 *           type: string
 *         last_name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         organization:
 *           type: string
 *         description:
 *           type: string
 *         phone_number:
 *           type: string
 *
 *    FreightDetails:
 *      type: object
 *      required:
 *        - companyName
 *        - shipmentType
 *        - weight
 *        - deliveryDate
 *        - fromLatitude
 *        - fromLongitude
 *        - toLatitude
 *        - toLongitude
 *        - driverId
 *        - userId
 *      properties:
 *        companyName:
 *          type: string
 *        shipmentType:
 *          type: string
 *        weight:
 *          type: number
 *        deliveryDate:
 *          type: string
 *          format: date
 *        fromLatitude:
 *          type: number
 *        fromLongitude:
 *          type: number
 *        toLatitude:
 *          type: number
 *        toLongitude:
 *          type: number
 *        driverId:
 *          type: string
 *          format: uuid
 *        userId:
 *          type: string
 *          format: uuid
 *
 *    OverseasLogisticsDetails:
 *      type: object
 *      required:
 *        - customsDeclarationNumber
 *        - customsClearanceStatus
 *        - shipmentId
 *      properties:
 *        customsDeclarationNumber:
 *          type: string
 *        customsClearanceStatus:
 *          type: string
 *        shipmentId:
 *          type: string
 *          format: uuid
 */
