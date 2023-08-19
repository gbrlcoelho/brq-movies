#import "AppDelegate.h"
#import <React/RCTRootView.h>

#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{  self.moduleName = @"BRQMovies";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  BOOL success = [super application:application didFinishLaunchingWithOptions:launchOptions];

    if (success) {
      RCTRootView *rootView = (RCTRootView *)self.window.rootViewController.view;
      

      UIStoryboard *storyboard = [UIStoryboard storyboardWithName:@"LaunchScreen" bundle:nil];
      UIView *launchScreenView = [[storyboard instantiateInitialViewController] view];
      
      [rootView setLoadingView:launchScreenView];
      
      rootView.loadingViewFadeDelay = 0.5;
      rootView.loadingViewFadeDuration = 0.5;
    }

    return success;
  }

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
