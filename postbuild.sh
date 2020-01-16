# Browse into './build/' directory
cd build
# Find all files, excluding (through 'grep'):
# - '.',
# - the newly created directory './user/'
# - all content for the directory'./static/'
# Move all matches to the directory './user/'
echo '2/4 Move relevant files'
find . | grep -Ev '^.$|^.\/user$|^.\/static\/.+' | xargs -I{} mv -v {} user
# Browse into './user/' directory
cd user
# Find all files within the folder (not subfolders)
# Replace string 'static/' with 'user/static/' on all files that match the 'find'
# ('sed' requires one to create backup files on OSX, so we do that)
echo '3/4 Replace file references'
find . -type f -maxdepth 1 | LC_ALL=C xargs -I{} sed -i.backup -e 's,static/,user/static/,g' {}
# Delete '*.backup' files created in the last process
echo '4/4 Clean up'
find . -name '*.backup' -type f -delete
# Done