interface SunProps {
  width: string;
  color: string;
}

function Sun({ width, color }: SunProps) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.00001 2.49999C5.11052 2.49999 5.2165 2.4561 5.29464 2.37796C5.37278 2.29982 5.41668 2.19384 5.41668 2.08333V1.24999C5.41668 1.13949 5.37278 1.03351 5.29464 0.955367C5.2165 0.877227 5.11052 0.833328 5.00001 0.833328C4.8895 0.833328 4.78352 0.877227 4.70538 0.955367C4.62724 1.03351 4.58334 1.13949 4.58334 1.24999V2.08333C4.58334 2.19384 4.62724 2.29982 4.70538 2.37796C4.78352 2.4561 4.8895 2.49999 5.00001 2.49999Z"
        fill={color}
      />
      <path
        d="M8.75 4.58334H7.91667C7.80616 4.58334 7.70018 4.62724 7.62204 4.70538C7.5439 4.78352 7.5 4.8895 7.5 5.00001C7.5 5.11052 7.5439 5.2165 7.62204 5.29464C7.70018 5.37278 7.80616 5.41668 7.91667 5.41668H8.75C8.86051 5.41668 8.96649 5.37278 9.04463 5.29464C9.12277 5.2165 9.16667 5.11052 9.16667 5.00001C9.16667 4.8895 9.12277 4.78352 9.04463 4.70538C8.96649 4.62724 8.86051 4.58334 8.75 4.58334Z"
        fill={color}
      />
      <path
        d="M2.50001 5.00001C2.50001 4.8895 2.45611 4.78352 2.37797 4.70538C2.29983 4.62724 2.19385 4.58334 2.08334 4.58334H1.25001C1.1395 4.58334 1.03352 4.62724 0.955382 4.70538C0.877242 4.78352 0.833344 4.8895 0.833344 5.00001C0.833344 5.11052 0.877242 5.2165 0.955382 5.29464C1.03352 5.37278 1.1395 5.41668 1.25001 5.41668H2.08334C2.19385 5.41668 2.29983 5.37278 2.37797 5.29464C2.45611 5.2165 2.50001 5.11052 2.50001 5.00001Z"
        fill={color}
      />
      <path
        d="M2.59165 2.08334C2.51043 2.00654 2.40202 1.96515 2.29028 1.96827C2.17854 1.9714 2.07262 2.01879 1.99582 2.10001C1.91902 2.18123 1.87762 2.28964 1.88075 2.40138C1.88388 2.51312 1.93126 2.61904 2.01248 2.69584L2.61248 3.27501C2.65275 3.31389 2.70043 3.34426 2.75269 3.3643C2.80495 3.38435 2.86071 3.39366 2.91665 3.39168C2.97278 3.39146 3.02828 3.37991 3.07984 3.35771C3.13139 3.33552 3.17792 3.30313 3.21665 3.26251C3.29426 3.18444 3.33781 3.07884 3.33781 2.96876C3.33781 2.85868 3.29426 2.75308 3.21665 2.67501L2.59165 2.08334Z"
        fill={color}
      />
      <path
        d="M7.08333 3.39165C7.19061 3.39123 7.29359 3.34944 7.37083 3.27499L7.97083 2.69582C8.04402 2.61934 8.08536 2.51787 8.08645 2.41202C8.08754 2.30616 8.0483 2.20386 7.9767 2.12589C7.90509 2.04792 7.80649 2.00013 7.70093 1.99222C7.59536 1.98432 7.49075 2.01689 7.40833 2.08332L6.80833 2.67499C6.73072 2.75305 6.68716 2.85866 6.68716 2.96874C6.68716 3.07881 6.73072 3.18442 6.80833 3.26249C6.88047 3.33862 6.97867 3.38474 7.08333 3.39165Z"
        fill={color}
      />
      <path
        d="M5.00001 7.5C4.8895 7.5 4.78352 7.5439 4.70538 7.62204C4.62724 7.70018 4.58334 7.80616 4.58334 7.91667V8.75C4.58334 8.86051 4.62724 8.96649 4.70538 9.04463C4.78352 9.12277 4.8895 9.16667 5.00001 9.16667C5.11052 9.16667 5.2165 9.12277 5.29464 9.04463C5.37278 8.96649 5.41668 8.86051 5.41668 8.75V7.91667C5.41668 7.80616 5.37278 7.70018 5.29464 7.62204C5.2165 7.5439 5.11052 7.5 5.00001 7.5Z"
        fill={color}
      />
      <path
        d="M7.38752 6.72498C7.30795 6.64818 7.20114 6.60613 7.09057 6.60808C6.98 6.61004 6.87473 6.65583 6.79793 6.7354C6.72113 6.81496 6.67908 6.92178 6.68103 7.03235C6.68299 7.14291 6.72878 7.24818 6.80835 7.32498L7.40835 7.91665C7.48559 7.9911 7.58857 8.03289 7.69585 8.03331C7.75168 8.03364 7.807 8.02274 7.85854 8.00127C7.91007 7.9798 7.95677 7.94819 7.99585 7.90831C8.0349 7.86958 8.0659 7.8235 8.08705 7.77272C8.10821 7.72195 8.1191 7.66749 8.1191 7.61248C8.1191 7.55748 8.10821 7.50302 8.08705 7.45224C8.0659 7.40147 8.0349 7.35538 7.99585 7.31665L7.38752 6.72498Z"
        fill={color}
      />
      <path
        d="M2.6125 6.72501L2.0125 7.30417C1.97345 7.34291 1.94245 7.38899 1.9213 7.43977C1.90014 7.49054 1.88925 7.545 1.88925 7.60001C1.88925 7.65501 1.90014 7.70947 1.9213 7.76025C1.94245 7.81102 1.97345 7.85711 2.0125 7.89584C2.05158 7.93571 2.09828 7.96732 2.14981 7.9888C2.20135 8.01027 2.25667 8.02117 2.3125 8.02084C2.41522 8.02172 2.51463 7.98462 2.59167 7.91667L3.19167 7.33751C3.27123 7.26071 3.31703 7.15544 3.31898 7.04487C3.32094 6.93431 3.27889 6.82749 3.20208 6.74792C3.12528 6.66836 3.02002 6.62256 2.90945 6.62061C2.79888 6.61866 2.69207 6.66071 2.6125 6.73751V6.72501Z"
        fill={color}
      />
      <path
        d="M5.00001 3.33334C4.67038 3.33334 4.34814 3.43109 4.07406 3.61423C3.79998 3.79736 3.58636 4.05766 3.46021 4.3622C3.33407 4.66675 3.30106 5.00186 3.36537 5.32516C3.42968 5.64846 3.58841 5.94543 3.8215 6.17852C4.05459 6.41161 4.35156 6.57034 4.67486 6.63465C4.99816 6.69896 5.33327 6.66596 5.63782 6.53981C5.94236 6.41366 6.20266 6.20004 6.38579 5.92596C6.56893 5.65188 6.66668 5.32965 6.66668 5.00001C6.66668 4.55798 6.49108 4.13406 6.17852 3.8215C5.86596 3.50894 5.44204 3.33334 5.00001 3.33334V3.33334Z"
        fill={color}
      />
    </svg>
  );
}

export default Sun;
