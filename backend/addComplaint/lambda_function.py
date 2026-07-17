import json
import os
import pymysql

# Environment Variables
DB_HOST = os.environ["DB_HOST"]
DB_NAME = os.environ["DB_NAME"]
DB_USER = os.environ["DB_USER"]
DB_PASSWORD = os.environ["DB_PASSWORD"]


def get_connection():
    return pymysql.connect(
        host=DB_HOST,
        user=DB_USER,
        password=DB_PASSWORD,
        database=DB_NAME,
        cursorclass=pymysql.cursors.DictCursor
    )


def lambda_handler(event, context):
    try:
        # Read JSON body
        body = json.loads(event["body"])

        name = body["name"]
        location = body["location"]
        description = body["description"]

        conn = get_connection()
        cursor = conn.cursor()

        sql = """
        INSERT INTO complaints
        (name, location, description, image_url, category, status)
        VALUES (%s, %s, %s, %s, %s, %s)
        """

        cursor.execute(
            sql,
            (
                name,
                location,
                description,
                "",
                "Pending",
                "Not Solved"
            )
        )

        conn.commit()

        cursor.close()
        conn.close()

        return {
            "statusCode": 200,
            "body": json.dumps({
                "message": "Complaint submitted successfully"
            })
        }

    except Exception as e:
        return {
            "statusCode": 500,
            "body": json.dumps({
                "error": str(e)
            })
        }