rm ../../plottajs-example/dist/*
cp ./dist/* ../../plottajs-example/dist

cd ../../plottajs-example
git add .
git commit -m "Update"
git push origin master
