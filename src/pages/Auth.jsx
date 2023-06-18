import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { Navbar } from "../layouts/Navbar";
import { handleGoogleSignIn } from "../functions/googleSignin";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  return (
    <div>
      <Navbar backButton={false} title="toddle" />
      <Flex h={"calc(100vh - 5rem)"} justify="center" align="center">
        <Box
          w={[300, 400, 500]}
          border={"1px solid #EBEBEB"}
          bg="white"
          rounded="md"
        >
          <Box
            h={64}
            w={"full"}
            rounded="md"
            backgroundImage={
              "url(https://cloud.toddleapp.com/assets/webapp/login_page/TeacherLeftBanner.svg)"
            }
            backgroundSize="cover"
            backgroundPosition="center"
          />
          <Flex
            direction="column"
            align="center"
            justify="center"
            p={8}
            bg="white"
            rounded="md"
          >
            <Text fontSize="2xl" fontWeight="bold" color={"#717171"}>
              Welcome to toddle!
            </Text>
            <Text fontSize="md" color={"#717171"} mt={2}>
              Please sign in to continue
            </Text>
            <Button
              mt={12}
              w={"full"}
              rounded="md"
              onClick={handleGoogleSignIn}
            >
              Sign in with Google
            </Button>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};
