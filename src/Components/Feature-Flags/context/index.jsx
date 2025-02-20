import { createContext, useEffect, useState } from "react";
import featureFlagsResponseServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

const FeatureFlagGlobalState = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});
console.log(enabledFlags);

  const fetchFeatureFlags = async () => {
    try{
        setLoading(true);
        const response = await featureFlagsResponseServiceCall();
        setEnabledFlags(response)
        
    }catch(error){
        console.error("Error fetching feature flags:", error);
    }finally{
        setLoading(false);
    }
  }
  useEffect(() => {
    fetchFeatureFlags();
  }, []);
  return (
    <FeatureFlagsContext.Provider value={{enabledFlags,loading}}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};

export default FeatureFlagGlobalState;
