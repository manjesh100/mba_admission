#!/bin/bash
bucket_name="${environment}.edplatza.com"
aws s3 sync ./build "s3://$bucket_name" 
distribution_id=$(aws cloudfront list-distributions | jq -r '.DistributionList.Items[] | select(.Origins.Items[].Id == "'${bucket_name}'") | .Id')
aws cloudfront create-invalidation --distribution-id $distribution_id --paths "/*"