
run:
	react-native run-ios

# put "export REACT_NATIVE_DEVICE=<Your Phone or Tablet's Name>" in your shell config
run-dev:
	react-native run-ios --device $(REACT_NATIVE_DEVICE)

run-5:
	react-native run-ios --simulator "iPhone 5"

run-6:
	react-native run-ios --simulator "iPhone 6"

run-7:
	react-native run-ios --simulator "iPhone 7"


flow:
	 npm run-script flow

test:
	npm run test

APPNAME=defunddapl

push-stage:
	code-push release-react $(APPNAME) ios -d Staging

push-promote:
	code-push promote $(APPNAME) Staging Production --description "New features and bugfixes"

push-release:
	code-push release-react $(APPNAME) ios -d Production

push-rollout-20:
	code-push promote $(APPNAME) Staging Production -r 20%
	# If no complaints from 20% of users, push-rollout-100 to push to all

push-rollout-100:
	code-push promote $(APPNAME) Staging Production -r 100%

push-stats:
	code-push deployment ls $(APPNAME) # add -k to get keys

xcode-release:
	# see https://stackoverflow.com/questions/30960081/how-to-submit-an-ios-app-to-the-app-store-itunes-connect-using-xcode#30961923
	# make screenshots on 7plus simulator, and upload to itunes connect https://developer.apple.com/library/content/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/Appendices/Properties.html#//apple_ref/doc/uid/TP40011225-CH26-SW2
console:
	react-native log-ios
	# react-native log-android
