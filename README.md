fatal: bad config line 1 in file .git/config

rm -rf .git

echo "# -1website-HTMLDOM" >> README.md

git init

git add README.md

git commit -m "first commit"

git branch -M main

git remote add origin https://github.com/natanaelrio/-1website-HTMLDOM.git

git push -u origin main



…or push an existing repository from the command line

git remote add origin https://github.com/natanaelrio/-1website-HTMLDOM.git

git branch -M main

git push -u origin main