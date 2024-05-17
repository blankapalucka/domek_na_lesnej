smartresize() {
#   mogrify -path $3 -filter Triangle -define filter:support=2 -thumbnail $2 -unsharp 0.25x0.08+8.3+0.045 -dither None -posterize 136 -quality 82 -define jpeg:fancy-upsampling=off -define png:compression-filter=5 -define png:compression-level=9 -define png:compression-strategy=1 -define png:exclude-chunk=all -interlace none -colorspace sRGB $1
   mogrify -path $3 -thumbnail $2 -quality 100 -colorspace sRGB $1
}

## TODO:
# Try converting directly to webp
#> mogrify -format webp -quality 80 *.jpg

# Usage:
# > source scripts/.smartresize.sh
# smartresize inputfile.png 800 jpg/
# smartresize bizon.jpg 800 jpg
# smartresize bizon.jpg 1080 jpg

## INFO: size parameter represents "width" of the target image