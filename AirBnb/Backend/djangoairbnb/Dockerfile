FROM python:3.12.2-slim-bullseye

# Set the working directory inside the container
WORKDIR /app

# Environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install dependencies
RUN apt-get update && apt-get install -y netcat

# Upgrade pip and install Python dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# Copy the entrypoint script and adjust permissions
COPY entrypoint.sh /app/entrypoint.sh
RUN sed -i 's/\r$//g' /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

# Copy the rest of the application code
COPY . .

# Set the entrypoint script
ENTRYPOINT ["/app/entrypoint.sh"]