
help:
	cat Makefile
	cat README

iPhoneSizes:
	for i in 40 58 60 80 87 120 180; do convert app-icon.png -filter Triangle -define filter:support=2 -thumbnail $$i -unsharp 0.25x0.08+8.3+0.045 -dither None -posterize 136 -quality 86 -define jpeg:fancy-upsampling=off -define png:compression-filter=5 -define png:compression-level=9 -define png:compression-strategy=1 -define png:exclude-chunk=all -interlace none -colorspace sRGB app-icon-$$i.png; done