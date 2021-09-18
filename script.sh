

printf "Installing  dependencies..."
npm install --save 
printf "Completed installing backend dependencies\n"

printf "Installing React app dependencies..."
cd ./frontend
npm install --save 
printf "Completed installing frontend dependencies\n"

printf "Building React app and placing into sub projects..."
npm run build
printf "Completed npm run build\n\n"

printf "Script completed successfully!\n"