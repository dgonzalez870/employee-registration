# Server startup

## Requirements

1. PHP > 8
2. composer > 2.2
3. Docker

## Instructions

In the backend folder run the following instructions:

1. `composer install`
2. `./vendor/bin/sail up`
3. `./vendor/bin/sail artisan migrate`
4. `./vendor/bin/sail artisan db:seed`

# Fronted startup

## Requirements:

1. NodeJs >= 18

## Instructions

In the Frontend folder run the following instructions:

1. `npm install`
2. `npm run start`
