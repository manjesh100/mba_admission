#!/bin/bash
sudo apt install jq -y
secret_name="edplatza-app-${environment}"
secret_json=$(aws secretsmanager get-secret-value --secret-id "$secret_name" --output text --query SecretString)
secret_dict=$(echo $secret_json | jq -r 'to_entries|map("\(.key)=\(.value|tostring)")|.[]')
echo "$secret_dict" > .env