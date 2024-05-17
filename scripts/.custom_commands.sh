### It has some issue with passing parameters
## Requires imagemagick library installed

function ctwp() {
      extension=$1 # take the extension you provided the function
      params=$2 # Add this
      for i in *.$extension # iterate through the files in the directory based on the extension
      do
        file=$i # declare the file as an easy-to-read variable
        convert $file $params webp/${file%.*}.webp
            # The above line:
            #a) executes the ImageMagick command, and
            #b) removes the basename from the file to grab only the file name
            #(so ‘bull.jpg’ becomes ‘bull’)
      done
}

source .smartresize.sh
# Example usage:
# ctwp jpg '-resize x600'
# ctwp jpg '-resize 600'

function smartresizeall() {
        extension=$1 # take the extension you provided the function
        params=$2 # Add this
        for i in *.$extension # iterate through the files in the directory based on the extension
        do
          file=$i # declare the file as an easy-to-read variable
#          convert $file $params webp/${file%.*}.webp

          smartresize $file $params jpg/
              # The above line:
              #a) executes the ImageMagick command, and
              #b) removes the basename from the file to grab only the file name
              #(so ‘bull.jpg’ becomes ‘bull’)
        done
}

## Example usage:
#> smartresizeall jpg 800 jpg/
#> smartresizeall jpg 1080 jpg/