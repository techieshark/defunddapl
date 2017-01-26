
run:
	react-native run-ios

flow:
	 npm run-script flow

console:
	react-native log-ios
	# react-native log-android

rns:
	cp -R react-native-share node_modules

rns-clean:
	rm -rf node_modules/react-native-share
