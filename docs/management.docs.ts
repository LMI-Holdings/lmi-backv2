/**
 * @openapi
 * /api/v1/service/freight:
 *   post:
 *     summary: Create a new freight entry
 *     tags:
 *       - Freight
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: JWT token obtained after user login
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FreightDetails'
 *     responses:
 *       '201':
 *         description: Freight successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '401':
 *         description: Unauthorized, invalid or missing token
 *       '500':
 *         description: Internal Server Error
 *
 * @openapi
 * /api/v1/service/freight/{id}:
 *   put:
 *     summary: Update an existing freight entry
 *     tags:
 *       - Freight
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: JWT token obtained after user login
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the freight entry to be updated
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FreightDetails'
 *     responses:
 *       '200':
 *         description: Freight successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '401':
 *         description: Unauthorized, invalid or missing token
 *       '404':
 *         description: Freight not found
 *       '500':
 *         description: Internal Server Error
 *
 * @openapi
 * /api/v1/service/freight:
 *   get:
 *     summary: Get a list of all freight entries
 *     tags:
 *       - Freight
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: JWT token obtained after user login
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: List of freight entries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FreightDetails'
 *       '401':
 *         description: Unauthorized, invalid or missing token
 *       '500':
 *         description: Internal Server Error
 *
 * @openapi
 * /api/v1/service/freight/{id}:
 *   delete:
 *     summary: Delete a freight entry by ID
 *     tags:
 *       - Freight
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: JWT token obtained after user login
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the freight entry to be deleted
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Freight successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '401':
 *         description: Unauthorized, invalid or missing token
 *       '404':
 *         description: Freight not found
 *       '500':
 *         description: Internal Server Error
 */

/**
 * @openapi
 * /api/v1/management/truck:
 *   post:
 *     summary: Create a new truck entry
 *     tags:
 *       - Truck
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: JWT token obtained after user login
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TruckDetails'
 *     responses:
 *       '201':
 *         description: Truck successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '401':
 *         description: Unauthorized, invalid or missing token
 *       '500':
 *         description: Internal Server Error
 *
 * @openapi
 * /api/v1/management/truck/{id}:
 *   put:
 *     summary: Update an existing truck entry
 *     tags:
 *       - Truck
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: JWT token obtained after user login
 *         schema:
 *           type: string
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the truck entry to be updated
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TruckDetails'
 *     responses:
 *       '200':
 *         description: Truck successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '401':
 *         description: Unauthorized, invalid or missing token
 *       '404':
 *         description: Truck not found
 *       '500':
 *         description: Internal Server Error
 *
 * @openapi
 * /api/v1/management/truck:
 *   get:
 *     summary: Get a list of all truck entries
 *     tags:
 *       - Truck
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         required: true
 *         description: JWT token obtained after user login
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: List of truck entries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TruckDetails'
 *       '401':
 *         description: Unauthorized, invalid or missing token
 *       '500':
 *         description: Internal Server Error
 *
 * @openapi
 * /api/v1/management/truck/{id}:
 *   delete:
 *     summary: Delete a truck entry by ID
 *     tags:
 *       - Truck
 *     parameters:
 *       - in: */
