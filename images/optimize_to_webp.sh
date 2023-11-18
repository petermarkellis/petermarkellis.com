#!/bin/bash
`for file in *; do cwebp -q 65 "$file" -o "${file%.*}.webp"; done`
echo "Conversion finished"
